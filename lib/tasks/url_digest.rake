namespace :url_digest do
  desc "Set random url-digest to existing users"

  task :set_url_digest => :environment do
    User.all.each do |user|
      if user.url_digest.nil?
        user.url_digest = SecureRandom.urlsafe_base64
        user.save
      end
    end
  end
end
